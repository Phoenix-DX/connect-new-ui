# StatisticsList

OutSystems: `UBTConnect.Directory_Locality.StatisticsList` · pack `migration/blocks/UBTConnect.Directory_Locality.StatisticsList.md`

| Input           | Type                                        | Prop             | Default |
| --------------- | ------------------------------------------- | ---------------- | ------- |
| In_Statistics   | {Id, StatisticsOptions} list (model :11911) | `inStatistics`   | `[]`    |
| In_SearchPrompt | Text                                        | `inSearchPrompt` | `''`    |
| In_IsLoading    | Boolean                                     | `inIsLoading`    | `false` |
| In_ShowSubtitle | Boolean                                     | `inShowSubtitle` | `false` |

The pack's input table omits In_Statistics (record list). In_Statistics is in the compiled model (StatisticsList.mvc.js:19).

Events: Event_Clicked(Id) → `onEventClicked(id)`, OnParametersChangedEv → `onOnParametersChangedEv`.

Placeholders: none (Statistics_ListItem's ActionsMenu stays empty).

## Captured variants (3 tested)

| Capture | Source                                          | What it shows                              |
| ------- | ----------------------------------------------- | ------------------------------------------ |
| v1      | pack variant 1, BrowseCountries/default         | wrapper only                               |
| v2      | `BrowseDirectory/analysis/dom/default.html` [0] | three locality cards, subtitle shown       |
| v3      | `BrowseCountries/analysis/dom/loading.html` [0] | In_IsLoading, the screen's 10 placeholders |

## Behaviour

- Action_DefineList (`action_DefineList`, exported): Title or Subtitle contains the search. The check ignores case, after
  JSUtils_String_RemoveAccents (ported in `UBTJavaScriptUtils/lib/actions.ts` from UBTJavaScriptUtils.controller.js:3078).
- OnChange (200 ms debounce) and Submit set the search, ClearString empties it. Not captured: "No results found for
  '…'" + "Try searching for a country or locality." (tested as a branch).
- OnReady's JSUtils_Element_Operations_GetElementById + ReactiveInstance_ForceUpdate of the List only force a
  re-render: React renders the derived list directly.
