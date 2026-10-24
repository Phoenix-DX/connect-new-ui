# EntitiesCarousel

`UBTConnect.Directory_Caroussel.EntitiesCarousel`: the swipeable carousel of HouseholdCarousel and SupperMeeting_Carousel.
Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc.js`.

| Input                                                  | Prop                      | Default |
| ------------------------------------------------------ | ------------------------- | ------- |
| In_EntitiesCarousel_Items (EntitiesCarousel_Item list) | `inEntitiesCarouselItems` | `[]`    |
| In_StartingPosition                                    | `inStartingPosition`      | `0`     |
| In_ConnectEntityTypeId (Connect_Entity)                | `inConnectEntityTypeId`   | `''`    |

Events: `Event_SetHeader(Event_Header)` → `onEventSetHeader`, `Event_Moved(Event_Index)` → `onEventMoved`. No placeholder.
(The pack's input table omits the record list In_EntitiesCarousel_Items; the model declares it, :11-49.)

Slots (a component does not import a container, rule 4). The block passes both to each EntitiesCarousel_Element,
which passes them to the slide block:

- `renderHouseholdDetails`: HouseholdDetails_Block of each household slide (EntitiesCarousel_HouseholdDetails).
  HouseholdCarousel renders the household details container in it.
- `renderSupperMeetingDetails`: SupperMeeting_DetailsBlock of each supper meeting slide
  (EntitiesCarouse_lSupperMeetingDetails). SupperMeeting_Carousel renders the supper meeting details container in it.

Each page gives only the slot of its entity type. The stories give a stand-in with the wrapper of
HouseholdDetails_Block.

## Behaviour

- OnInitialize: active index = In_StartingPosition, next active index -1, Index_Initial = start (Carousel
  StartingPosition, AutoPlay and Loop False, Navigation None, `ubt-entities-carousel`).
- Carousel Initialized calls these actions (`components/ui/lib/actions.ts`):
  - CarouselDisableOnRender.
  - SetSplideConfigs (fixedHeight `var(--carousel-slide-custom-height)`, perMove 1, flickPower 100, flickMaxPages 1,
    waitForTransition true). Speed 0 equals the record default, so the call does not send it.
  - UnsetSplideEvent "resize" / "resized".
  - SetSplideEvent "moved".
- The original passes event names where UnsetSplideEvent expects an event id. Both UnsetSplideEvent calls fail silently
  (Success False) and change nothing. Ported as is.
- `moved` → both indexes = newIndex, Event_Moved(newIndex). UseMoveHandler is False. With True, the block binds `move`
  instead.
- Each List item is an EntitiesCarousel_Element (RenderBuffer 3, EntityId through TextToLongInteger). Its
  Event_SetHeader appends {header, row number} to HeaderList unless that index has one.
- The header generator raises Event_SetHeader for the active index whenever the index or the list changes.
- Nothing calls Action_UpdateCarouselInternalPosition (:676-702): not ported.
- The List has no name: no id (Splide names it `splide01-list`). The Elements get no id: the runtime generates the list
  key in `b3-l1-1152_0-$b2`.

## Captures

| File      | Source                                                                 | Story |
| --------- | ---------------------------------------------------------------------- | ----- |
| `v1.html` | pack variant 1, HouseholdCarousel/default (Carousel, generator nested) | V1    |

Not compared to a capture. Tests cover:

- elements rendered around the start (0-3 of 23) and after a move
- the Initialized calls
- the fixed slide height after the redraw
- Event_Moved and Event_SetHeader

## Not settled

- Slides of a household already seen keep HouseholdDetails_Block's view cache (README there). A restored view raises no
  HouseholdDataFetched, so the carousel does not append its header again (same as the original block).
