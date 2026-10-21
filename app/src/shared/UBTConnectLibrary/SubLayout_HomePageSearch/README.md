# SubLayout_HomePageSearch

OutSystems: `UBTConnectLibrary.Layouts.SubLayout_HomePageSearch` · pack
`migration/blocks/UBTConnectLibrary.Layouts.SubLayout_HomePageSearch.md`

Inputs: none. Events: `Clicked_Search` → `onClickedSearch` (StaticInput Click_Input). Placeholders: none.
Markup: CustomContainer `ubt-home-page-search` (padding x / top base, empty margin record) > StaticInput (default
inputs: the prompt is StaticInput's default).

## Captured variants (2 tested)

| Capture | Source                               | What it shows              |
| ------- | ------------------------------------ | -------------------------- |
| v1      | pack variant 1, HomeFeed/default     | wrapper only               |
| v2      | `HomeFeed/analysis/dom/default.html` | full markup with the input |

## Not captured / not settled

- Nothing beyond the click (tested).
