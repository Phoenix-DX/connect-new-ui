# EntitiesCarousel_Element

`UBTConnect.Directory_Caroussel.EntitiesCarousel_Element`: one slide of EntitiesCarousel. Compiled source:
`migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc.js`.

| Input                                   | Prop                       | Default |
| --------------------------------------- | -------------------------- | ------- |
| In_ConnectEntityTypeId (Connect_Entity) | `inConnectEntityTypeId`    | `''`    |
| In_EntityId (Long Integer)              | `inEntityId`               | `'0'`   |
| In_CarouselLength                       | `inCarouselLength`         | `0`     |
| In_Index_ActiveElement                  | `inIndexActiveElement`     | `0`     |
| In_Index_NextActiveElement              | `inIndexNextActiveElement` | `0`     |
| In_Index_CurrentElement                 | `inIndexCurrentElement`    | `0`     |
| In_RenderBuffer                         | `inRenderBuffer`           | `0`     |

Event `Event_SetHeader(Event_Header)` → `onEventSetHeader` (from the household details only). No placeholder.
Slot `renderHouseholdDetails`: HouseholdDetails_Block of a household slide, passed on to
EntitiesCarousel_HouseholdDetails (README there). The supper meeting slide (EntitiesCarouse_lSupperMeetingDetails) is
still rendered here; its own step (SupperMeeting_Carousel) changes it.

- OnReady / OnParametersChanged (:397-470), derived on render: inside the buffer of the active or the next active element
  → rendered, and it stays rendered (IsSinglePassRender True); IsSkeletonOnly = not inside the active element's buffer.
- Supper Meetings → EntitiesCarouse_lSupperMeetingDetails, Household → EntitiesCarousel_HouseholdDetails (other types: an
  empty container), each with a CarouselTag "n / total" in its placeholder.

## Captures

| File      | Source                                                | Story |
| --------- | ----------------------------------------------------- | ----- |
| `v1.html` | pack variant 1, HouseholdCarousel/default (element 0) | V1    |
| `v2.html` | pack variant 2, HouseholdCarousel/default (element 4) | V2    |
| `v3.html` | pack variant 3, SupperMeeting_Carousel/default        | V3    |

Not captured, tested: skeleton-only element (next active buffer only), staying rendered after a move, another entity type.

The stories V1 and V2 give a stand-in of HouseholdDetails_Block in the slot. V3 renders the real supper meeting slide
with the query client and a router. The stories cannot set the synched bookmarks and notes (rule 4: no `platform/`
import), so in Storybook the call-to-action section of V3 stays loading until another story sets them. The capture
compares only the wrapper of the nested block, and the stories of EntitiesCarouse_lSupperMeetingDetails show the
synched state.
