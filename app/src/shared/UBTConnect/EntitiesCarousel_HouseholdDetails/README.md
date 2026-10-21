# EntitiesCarousel_HouseholdDetails

`UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails`: a household slide. Compiled source:
`migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc.js`.

| Input                         | Prop               | Default |
| ----------------------------- | ------------------ | ------- |
| In_HouseholdId (Long Integer) | `inHouseholdId`    | `'0'`   |
| In_IsSkeletonOnly             | `inIsSkeletonOnly` | `false` |

Placeholder `Placeholder_CarouselTag` → `children` (rendered in a `<div id="<prefix>-Placeholder_CarouselTag">`, the
Placeholder widget, inside HouseholdDetails_Block's own placeholder). Event `Event_SetHeader(Event_Header)` →
`onEventSetHeader`: on HouseholdDataFetched, "LocalityName, CountryName". The block variables LocalityName,
CountryName and DeceasedOrAncestry_View are assigned but read by nothing: not kept.

## Captures

| File      | Source                                                                    | Story |
| --------- | ------------------------------------------------------------------------- | ----- |
| `v1.html` | pack variant 1, HouseholdCarousel/default (HouseholdDetails_Block nested) | V1    |

Not captured, tested: Event_SetHeader after the fetch, placeholder nesting. HouseholdDetails_Block's view cache applies.
