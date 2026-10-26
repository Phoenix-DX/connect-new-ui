# EntitiesCarouse_lSupperMeetingDetails

`UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails` (sic, the original name): a supper meeting slide.
Compiled source: `migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc.js`.

| Input                           | Prop              | Default |
| ------------------------------- | ----------------- | ------- |
| In_SubdivisionId (Long Integer) | `inSubdivisionId` | `'0'`   |

Placeholder `Placeholder_CarouselTag` → `children`, rendered in a `<div id="<prefix>-Placeholder_CarouselTag">` (the
Placeholder widget) passed as SupperMeeting_DetailsBlock's CarouselTag placeholder. Sent as In_SubdivsionId (sic). No
events.

The block has props only. Its files import no `api/`, `platform/`, `containers/` or `pages/` (rule 4). A component does
not import a container, so SupperMeeting_DetailsBlock is a slot: `renderSupperMeetingDetails(slot)`, with the same
signature style as `renderHouseholdDetails` of EntitiesCarousel_HouseholdDetails. The slot
(`CarouselSupperMeetingDetailsSlot`) has the instance id `<prefix>-$b1`, the supper meeting id and the
Placeholder_CarouselTag widget as `carouselTag`. The SupperMeeting_Carousel page renders `SupperMeetingDetailsContainer`
(`containers/SupperMeetingDetails`) with these inputs and its flag. Without the slot, the block renders its wrapper
only.

## Captures

| File      | Source                                                                             | Story |
| --------- | ---------------------------------------------------------------------------------- | ----- |
| `v1.html` | pack variant 1, SupperMeeting_Carousel/default (SupperMeeting_DetailsBlock nested) | V1    |

The story gives a stand-in with the wrapper of SupperMeeting_DetailsBlock, the supper meeting id and the carousel tag.
Not captured, tested: placeholder nesting, the slot inputs, no slot. The page test
(`pages/SupperMeeting_Carousel/SupperMeeting_Carousel.test.tsx`) covers the slot with the real container.
