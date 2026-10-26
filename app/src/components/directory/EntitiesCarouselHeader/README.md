# EntitiesCarousel_HeaderGenerator

`UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator`: an empty block that raises the active element's
header. Compiled source:
`migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc.js`.

| Input                                       | Prop                            | Default |
| ------------------------------------------- | ------------------------------- | ------- |
| In_HouseholdCarouselHeaderList (HeaderList) | `inHouseholdCarouselHeaderList` | `[]`    |
| In_CurrentIndex                             | `inCurrentIndex`                | `0`     |

Event `Event_SetHeader(Event_Header)` → `onEventSetHeader`: OnParametersChanged only (no OnReady, so nothing on the first
render), with Get_CurrentEntityHeader(In_CurrentIndex, list, False) (`lib/actions.ts`): "" while the index has no header.
A changed input is a different value or a new list (EntitiesCarousel replaces the list when it appends).

## Captures

| File      | Source                                    | Story |
| --------- | ----------------------------------------- | ----- |
| `v1.html` | pack variant 1, HouseholdCarousel/default | V1    |
