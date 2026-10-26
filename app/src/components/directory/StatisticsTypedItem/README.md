# Statistics_TypedItem

OutSystems: `UBTConnect.Directory_Locality.Statistics_TypedItem` · pack `migration/blocks/UBTConnect.Directory_Locality.Statistics_TypedItem.md`

| Input                | Type               | Prop                  | Default |
| -------------------- | ------------------ | --------------------- | ------- |
| UI_CountryStatistics | UI_TypedStatistics | `uICountryStatistics` | `{}`    |
| In_HideNavigation    | Boolean            | `inHideNavigation`    | `false` |
| In_HideBorder        | Boolean            | `inHideBorder`        | `false` |
| In_ImageEntityTypeId | Text               | `inImageEntityTypeId` | `''`    |
| In_ImageEntityId     | Text               | `inImageEntityId`     | `''`    |
| In_HasImage          | Boolean            | `inHasImage`          | `false` |

Events: none (the card click is the screen's, on its own wrapper). Placeholders: none.

## Captured variants (3 tested)

| Capture | Source                                         | What it shows                               |
| ------- | ---------------------------------------------- | ------------------------------------------- |
| v1      | pack variant 1, CountryDetails/default         | wrapper only                                |
| v2      | `CountryDetails/analysis/dom/default.html` [0] | locality card, flag loaded, supper meetings |
| v3      | `CountryList/analysis/dom/default.html` [0]    | country card, flag loaded, localities       |

v2 / v3 were captured after the flag loaded: their stories use `withLoadedImages` (`src/test/loadedImages.tsx`),
which raises `load` on the rendered images.

## Not captured

- In_HideBorder (border-none), In_HideNavigation (no chevron), no image (empty left column): tested as branches.
- UI_TypedStatistics structure: `UBTConnect/lib/structures.ts` (UBTConnect.model.js:10129).
