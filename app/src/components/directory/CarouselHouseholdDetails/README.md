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

The block has props only. A component does not import a container (rule 4), so HouseholdDetails_Block is a slot:
`renderHouseholdDetails(slot)`. The slot (`CarouselHouseholdDetailsSlot`) has the instance id `<prefix>-$b1`, the
household id, In_IsSkeletonOnly, the Placeholder_CarouselTag widget as `carouselTag` and `onHouseholdDataFetched`. The
HouseholdCarousel page renders `HouseholdDetailsContainer` (`containers/HouseholdDetails`) with these inputs and its
flags. Without the slot, the block renders its wrapper only. The stories give a stand-in with the wrapper of
HouseholdDetails_Block that raises HouseholdDataFetched for the fictional household.

## Captures

| File      | Source                                                                    | Story |
| --------- | ------------------------------------------------------------------------- | ----- |
| `v1.html` | pack variant 1, HouseholdCarousel/default (HouseholdDetails_Block nested) | V1    |

Not captured, tested: Event_SetHeader after the fetch, placeholder nesting, the slot inputs, no slot. HouseholdDetails_Block's
view cache applies. The page test (`pages/HouseholdCarousel/HouseholdCarousel.test.tsx`) covers the slot with the real
container.
