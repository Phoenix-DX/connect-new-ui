# EntitiesCarouse_lSupperMeetingDetails

`UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails` (sic, the original name): a supper meeting slide.
Compiled source: `migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc.js`.

| Input                           | Prop              | Default |
| ------------------------------- | ----------------- | ------- |
| In_SubdivisionId (Long Integer) | `inSubdivisionId` | `'0'`   |

Placeholder `Placeholder_CarouselTag` → `children`, rendered in a `<div id="<prefix>-Placeholder_CarouselTag">` (the
Placeholder widget) passed as SupperMeeting_DetailsBlock's `placeholderCarouselTag`. Sent as In_SubdivsionId (sic). No
events.

## Captures

| File      | Source                                                                             | Story |
| --------- | ---------------------------------------------------------------------------------- | ----- |
| `v1.html` | pack variant 1, SupperMeeting_Carousel/default (SupperMeeting_DetailsBlock nested) | V1    |

The placeholder test uses a stand-in for SupperMeeting_DetailsBlock (it shows the placeholder only in the loaded image card).

The block has props only. Its files import no `api/`, `platform/`, `containers/` or `pages/` (rule 4). It renders
SupperMeeting_DetailsBlock (`components/directory/SupperMeetingDetails`) itself; the step SupperMeeting_Details changes
that block. The story V1 renders the real SupperMeeting_DetailsBlock with the query client and a router. It cannot set
the synched bookmarks and notes (no `platform/` import), so in Storybook the call-to-action section of V1 stays loading
until another story sets them. The capture check and the test do not depend on it: they use the stand-in.
